<?php

namespace App\Contracts\Repository;

use App\Models\Post;

interface PostRepositoryContract
{
    public function getAll();
    public function getById($id);
    public function create(array $data);
    public function update($id, array $data);
    public function delete($id);
}
