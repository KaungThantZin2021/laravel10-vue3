<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Validator;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;

class AuthController extends Controller
{
    public function register(UserRegisterRequest $request)
    {
        $request->validated($request->all());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Successfully registered.',
            'data' => [
                'user' => $user,
                'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken
            ],
        ]);
    }

    public function login(UserLoginRequest $request)
    {
        $request->validated($request->all());

        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Successfully logged in.',
                'data' => [
                    'user' => $user,
                    'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken
                ],
            ]);
        } else {
            return response()->json([
                'message' => 'Invalid email or password.',
            ], 401);
        }
    }

    public function logout()
    {
        auth()->guard('sanctum')->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully Logged Out.',
        ]);
    }
}
