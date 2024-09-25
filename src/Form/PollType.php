<?php

namespace App\Form;

use App\Entity\Poll;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class PollType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('description')
            ->add('type', ChoiceType::class, [
                'choices'  => [
                    'Unique' => 1,
                    'Multiple' => 2,
                ],
            ])
            // ->add('deadline')
        ;
        
        $builder->add('answers', CollectionType::class, [
            'entry_type' => AnswerType::class,
            'entry_options' => ['label' => false],
            'allow_add' => true,
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'csrf_protection' => true,
            'csrf_field_name' => '_token', // Hidden input field name (default is _token)
            'csrf_token_id'   => 'unique_token_id', // This should match the ID used in getToken()
            'data_class' => Poll::class,
        ]);
    }
}
