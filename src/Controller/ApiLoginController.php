<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiLoginController extends AbstractController
{
    #[Route('/api/login', name: 'app_api_login', methods: ['POST'])]
    public function index(#[CurrentUser] ?User $user): Response
    {
        


        if (!$this->getUser()) {
            return $this->json([
                'message' => 'missing credentials',
                ], Response::HTTP_UNAUTHORIZED
            );
        }

        // $token = "token"; // somehow create an API token for $user
        
        $user = $this->getUser();
        return $this->json([
            'user'    => $user->getUserIdentifier(),
            'message' => 'Login successful',
        ]);
    }
}
