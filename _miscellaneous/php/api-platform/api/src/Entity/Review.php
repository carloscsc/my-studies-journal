<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/** A review of a book */
#[ORM\Entity]
#[ApiResource]

class Review
{
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    private ?int $id = null;

    #[ORM\Column(type: 'smallint')]
    public int $rating = 0;

    #[ORM\Column(type: 'text')]
    public string $body = '';

    #[ORM\Column]
    public string $author = '';

    #[ORM\Column]
    public ?\DateTimeImmutable $publicationDate = null;

    #[ORM\ManyToOne(inversedBy: 'reviews')]
    public ?Book $book = null;

    public function getId(): ?Int
    {
        return $this->id;
    }
}

