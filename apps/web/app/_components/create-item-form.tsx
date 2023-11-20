"use client";

import type { FormEvent } from "react";
import React, { useState } from "react";
import { Button } from "ui";
import { api } from "../../utils/api";

export function CreateItemForm(): React.ReactElement {
    const [title, setTitle] = useState("");

    const createItem = api.item.create.useMutation();

    return (
      <div>
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            createItem.mutate({
              name: title,
              price: 10.99,
              description: "Sample Item",
            });
          }}
        >
          <input
            className="border border-gray-300 rounded-md px-2"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
            <Button className="mx-2" type="submit" variant="secondary">Create Item</Button>
        </form>
      </div>
    );
}