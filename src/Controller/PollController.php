<?php

namespace App\Controller;

use App\Entity\Poll;
use App\Form\PollType;
use App\Repository\PollRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/poll')]
class PollController extends AbstractController
{
    #[IsGranted('ROLE_USER')]
    #[Route('/', name: 'app_poll_index', methods: ['GET'])]
    public function index(PollRepository $pollRepository): Response
    {
        return $this->render('poll/index.html.twig', [
            'polls' => $pollRepository->findAll(),
        ]);
    }

    

    #[IsGranted('ROLE_USER')]
    #[Route('/new', name: 'app_poll_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $poll = new Poll();
        $form = $this->createForm(PollType::class, $poll);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $poll->setCreatedAt(new \DateTimeImmutable);
            $poll->setUpdatedAt(new \DateTimeImmutable);
            $poll->setCreatedBy($this->getUser());
            $entityManager->persist($poll);
            $entityManager->flush();

            return $this->redirectToRoute('app_poll_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('poll/new.html.twig', [
            'poll' => $poll,
            'form' => $form,
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
