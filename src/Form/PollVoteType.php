<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PollVoteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {



        // $builder
        //     ->add('field_name', ChoiceType::class, [
        //     'choices'  => [
        //         'Maybe' => null,
        //         'Yes' => true,
        //         'No' => false,
        //     ],)
        // ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
