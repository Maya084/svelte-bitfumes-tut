import {
    writable
} from "svelte/store";

import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

export const users = writable([{
        id: 1,
        image: user1,
        name: "Jane",
        email: "jane@bitfumes.com",
        active: true,
    },
    {
        id: 2,
        image: user2,
        name: "Daisy",
        email: "daisy@email.com",
        active: false,
    },
    {
        id: 3,
        image: user3,
        name: "Anna",
        email: "anna@lol.com",
        active: true,
    },
]);

export const addNewUser = ({
    detail
}) => {
    users.update(_users => [
        ..._users,
        {
            ...detail,
            id: _users.length + 1,
        }
    ]);
};

export const remove = ({
    detail
}) => {
    users.update((_users) => _users.filter((user) => user.id !== detail));
};