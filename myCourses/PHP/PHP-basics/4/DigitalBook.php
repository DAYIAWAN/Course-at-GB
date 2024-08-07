<?php

class DigitalBook extends Book {
    private $downloadLink;

    public function __construct($title, $author, $downloadLink) {
        parent::__construct($title, $author);
        $this->downloadLink = $downloadLink;
    }

    public function getHandoutInfo() {
        return "Ссылка на скачивание: " . $this->downloadLink;
    }
}
