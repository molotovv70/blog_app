<?php
namespace App\Repositories;

use App\Models\Post;
use App\Contracts\Repository\PostContract;

class PostRepository implements PostContract
{
    protected Post $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    public function getAll()
    {
        return $this->post->all();
    }

    public function getById($id)
    {
        return $this->post->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->post->create($data);
    }

    public function update($id, array $data)
    {
        $post = $this->post->findOrFail($id);
        $post->update($data);
        return $post;
    }

    public function delete($id)
    {
        $post = $this->post->findOrFail($id);
        return $post->delete();
    }
}
