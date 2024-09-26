<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class PollVoteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $choices = [];
        foreach($options['poll']->getAnswers() as $answer){
            $choices[$answer->getAnswerText()] = $answer->getId();
        }

        $builder
            ->add('answerChoice', ChoiceType::class, [
            'choices'  => $choices,
            'expanded' => true,
            'multiple' => false,
            'attr' => [
                // 'class' => "flex items-center" 
            ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // ...,
            'poll' => null,
        ]);

    }
}
