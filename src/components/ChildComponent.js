import React from "react"
export default function ChildComponent({ todos, handleComplete }) {
    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map((l) => (
                    <li key={l.id}>
                        <span>{l.text}</span>

                        {!l.completed && (
                            <button onClick={() => handleComplete(l.id)}>
                                Complete
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}