<?php

namespace App\Http\Controllers;

use App\Contracts\Repository\PostContract;
use App\Http\Requests\Post\StoreRequest;
use App\Http\Requests\Post\UpdateRequest;
use App\Http\Resources\PostPreviewWithUserResource;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;

class PostController extends Controller
{
    protected PostContract $postRepository;

    public function __construct(PostContract $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function index()
    {
        $posts = $this->postRepository->getAll();
        return PostPreviewWithUserResource::collection($posts)->resolve();
    }

    public function store(StoreRequest $request): array
    {
        $data = $request->all();
        $post = $this->postRepository->create($data);
        return PostResource::make($post)->resolve();
    }

    public function show($id)
    {
        $post = $this->postRepository->getById($id);
        return response()->json($post);
    }

    public function update(UpdateRequest $request, $id)
    {
        $post = $this->postRepository->update($id, $request->all());
        return response()->json($post);
    }

    public function destroy($id)
    {
        $this->postRepository->delete($id);
        return response()->json(null, 204);
    }
}
