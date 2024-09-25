<?php

namespace App\Entity;

use App\Repository\AnswerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnswerRepository::class)]
class Answer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'answers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Poll $poll = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $answerText = null;

    #[ORM\OneToMany(targetEntity: Vote::class, mappedBy: 'answer', orphanRemoval: true)]
    private Collection $votes;

    public function __construct()
    {
        $this->votes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPoll(): ?Poll
    {
        return $this->poll;
    }

    public function setPoll(?Poll $poll): static
    {
        $this->poll = $poll;

        return $this;
    }

    public function getAnswerText(): ?string
    {
        return $this->answerText;
    }

    public function setAnswerText(string $answerText): static
    {
        $this->answerText = $answerText;

        return $this;
    }

    /**
     * @return Collection<int, Vote>
     */
    public function getVotes(): Collection
    {
        return $this->votes;
    }

    
    /**
     * @return Collection<int, Vote>
     */
    public function getVotesCount(): int
    {
        return $this->votes->count();
    }

    public function addVote(Vote $vote): static
    {
        if (!$this->votes->contains($vote)) {
            $this->votes->add($vote);
            $vote->setAnswer($this);
        }

        return $this;
    }

    public function removeVote(Vote $vote): static
    {
        if ($this->votes->removeElement($vote)) {
            // set the owning side to null (unless already changed)
            if ($vote->getAnswer() === $this) {
                $vote->setAnswer(null);
            }
        }

        return $this;
    }
}
