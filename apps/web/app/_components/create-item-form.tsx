"use client";

import { useState } from "react";
import { trpc } from "../../utils/api";
// import { } from "@repo/ui";

export function CreateItemForm() {
    const [name, setName] = useState("");
    const createItem = trpc.item.create.useMutation();
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    createItem.mutate({
                        name: name,
                        price: 100,
                        description: "test",
                    });
                }}
            >
                Create item
            </button>
        </div>
    )
}