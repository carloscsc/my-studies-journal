<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/** A book. */
#[ORM\Entity]
#[ApiResource]
class Book
{
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Assert\NotBlank]
    public ?string $isbn = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    public string $title = '';

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank]
    public string $description = '';

    #[ORM\Column]
    #[Assert\NotBlank]
    public string $author = '';

    #[ORM\Column]
    #[Assert\NotNull]
    public ?\DateTimeImmutable $publicationDate = null;

    /** @var Review[] Available Reviews of this book */
    #[ORM\OneToMany(mappedBy: 'book', targetEntity: Review::class, cascade: ['persist', 'remove'])]
    public iterable $reviews;

    public function __construct() {
        $this->reviews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
}
