<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/** A book. */
#[ORM\Entity]
#[ApiResource]
class Book
{
    #[ORM\Id, ORM\Column, ORM\GeneratedValue]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    public ?string $isbn = null;

    #[ORM\Column]
    public string $title = '';

    #[ORM\Column(type: 'text')]
    public string $description = '';

    #[ORM\Column]
    public string $author = '';

    #[ORM\Column]
    public ?\DateTimeImmutable $publicationDate = null;

    /** @var Review[] Available Reviews of this book */
    #[ORM\OneToMany(targetEntity: Review::class, mappedBy: 'book', cascade: ['persist', 'remove'])]
    public iterable $reviews;

    public function __construct() {
        $this->reviews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
}
