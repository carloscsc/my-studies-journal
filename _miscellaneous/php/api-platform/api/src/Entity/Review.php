<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/** A review of a book */
#[ORM\Entity]
#[ApiResource]

class Review
{
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    private ?int $id = null;

    #[ORM\Column(type: 'smallint')]
    #[Assert\Range(
        notInRangeMessage: 'A classificação deve estar entre {{ min }} e {{ max }}.',
        min: 0,
        max: 5,
    )]
    public int $rating = 0;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank]
    public string $body = '';

    #[ORM\Column]
    #[Assert\NotBlank]
    public string $author = '';

    #[ORM\Column]
    #[Assert\NotBlank]
    public ?\DateTimeImmutable $publicationDate = null;

    #[ORM\ManyToOne(inversedBy: 'reviews')]
    #[Assert\NotBlank]
    public ?Book $book = null;

    public function getId(): ?Int
    {
        return $this->id;
    }
}

