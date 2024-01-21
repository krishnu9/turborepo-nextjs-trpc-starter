"use client";

import { useState } from "react";
import { trpc } from "../../utils/api";
// import { } from "@repo/ui";

export function CreateItemForm() {
    const [name, setName] = useState("");
    const createItem = trpc.item.create.useMutation();
    return (
        <div>
         <form 
            onSubmit={async (e) => {
                e.preventDefault();
                await createItem.mutateAsync({ 
                    name,
                    description: "test",
                    price: 100,
                 });
                setName("");
            }}
         >
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="border text-gray-900 border-gray-300 rounded-md p-2 mx-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Create
            </button>
         </form>
        </div>
    )
}