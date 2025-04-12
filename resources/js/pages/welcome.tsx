import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600">
                Bienvenido a Laravel + Inertia + React + TypeScript + Tailwind!
            </h1>
        </div>
    );
}
