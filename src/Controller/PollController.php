<?php

namespace App\Controller;

use App\Entity\Poll;
use App\Entity\Vote;
use App\Entity\Answer;
use App\Form\PollType;
use App\Form\PollVoteType;
use App\Repository\PollRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/poll')]
class PollController extends AbstractController
{

    
    private $csrfTokenManager;

    public function __construct(CsrfTokenManagerInterface $csrfTokenManager)
    {
        $this->csrfTokenManager = $csrfTokenManager;
    }
    
    #[IsGranted('ROLE_USER')]
    #[Route('/', name: 'app_poll_index', methods: ['GET'])]
    public function index(PollRepository $pollRepository): Response
    {
        return $this->render('poll/index.html.twig', [
            'polls' => $pollRepository->findAll(),
        ]);
    }



    

    // #[IsGranted('ROLE_USER')]
    #[Route('/new', name: 'app_poll_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $poll = new Poll();
        
        $answer1 = new Answer();
        $answer1->setAnswerText('Réponse 1');
        $poll->getAnswers()->add($answer1);
        $answer2 = new Answer();
        $answer2->setAnswerText('Réponse 2');
        $poll->getAnswers()->add($answer2);
        $form = $this->createForm(PollType::class, $poll);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($poll->getAnswers() as $answer) {
                $answer->setPoll($poll);
                $entityManager->persist($answer);
            }
            $poll->setCreatedAt(new \DateTimeImmutable);
            $poll->setUpdatedAt(new \DateTimeImmutable);
            $poll->setCreatedBy($this->getUser());

            $entityManager->persist($poll);
            $entityManager->flush();
            return $this->redirectToRoute('app_poll_show_vote_form', ['id' => $poll->getId()], Response::HTTP_SEE_OTHER);
        }

        
        return $this->renderForm('poll/new.html.twig', [
            'poll' => $poll,
            'form' => $form,
            'csrfToken' => $this->csrfTokenManager->getToken('unique_token_id')->getValue()
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{id}', name: 'app_poll_show', methods: ['GET'])]
    public function show(Poll $poll): Response
    {
        return $this->render('poll/show.html.twig', [
            'poll' => $poll,
        ]);
    }

    
    #[IsGranted('ROLE_USER')]
    #[Route('/results/{id}', name: 'app_poll_show_results', methods: ['GET'])]
    public function showResults(Poll $poll): Response
    {
        
        return $this->render('poll/show_results.html.twig', [
            'poll' => $poll,
        ]);
    }
    

    #[IsGranted('ROLE_USER')]
    #[Route('/form/{id}', name: 'app_poll_show_vote_form', methods: ['GET', 'POST'])]
    public function showVoteForm(Request $request, Poll $poll, EntityManagerInterface $entityManager): Response
    {

        if($poll->checkHasVoted($this->getUser())){
            return $this->redirectToRoute("app_home");
        }
        
        $pollVote = null;
        $form = $this->createForm(PollVoteType::class, $pollVote, [
            'poll' => $poll,
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $vote = new Vote();
            $vote->setUser($this->getUser());
            $vote->setAnswer($poll->getAnswerbyId($form->getData()['answerChoice']));
            $vote->setWeight(1);
            $entityManager->persist($vote);
            $entityManager->flush();

            return $this->redirectToRoute('app_poll_show_results', ['id' => $poll->getId()], Response::HTTP_SEE_OTHER);
        }
        return $this->renderForm('poll/poll_vote.html.twig', [
            'poll' => $poll,
            'form' => $form
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{id}/edit', name: 'app_poll_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Poll $poll, EntityManagerInterface $entityManager): Response
    {

        $form = $this->createForm(PollType::class, $poll);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $poll->setUpdatedAt(new \DateTimeImmutable);
            $entityManager->persist($poll);
            $entityManager->flush();

            return $this->redirectToRoute('app_poll_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('poll/edit.html.twig', [
            'poll' => $poll,
            'form' => $form,
        ]);
    }

    #[IsGranted('ROLE_USER')]
    #[Route('/{id}', name: 'app_poll_delete', methods: ['POST'])]
    public function delete(Request $request, Poll $poll, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$poll->getId(), $request->request->get('_token'))) {
            $entityManager->remove($poll);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_poll_index', [], Response::HTTP_SEE_OTHER);
    }
}
