<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PreflightController extends AbstractController
{
    #[Route('/api/{path}', name: 'preflight', methods: ['OPTIONS'], requirements: ['path' => '.+'])]
    public function preflight(): Response
    {
        return new Response('', Response::HTTP_NO_CONTENT, [
            'Access-Control-Allow-Origin' => 'http://127.0.0.1:8000',
            'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers' => 'Content-Type, Authorization',
        ]);
    }
}