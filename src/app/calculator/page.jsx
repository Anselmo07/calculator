"use client";

import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleEqual = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput("Error");
        }
    };

    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleClear = () => {
        setInput("");
    };

    return (
        <section>
            <div className="containerCalculator">
                <div className="calculator">
                    <div className="divCalculator">
                        <div className="view">{input || "0"}</div>
                        <div className="button">
                            <div className="containerButtons">
                                {[
                                    ["7", "8", "9", "*", "/"],
                                    ["4", "5", "6", "+", "-"],
                                    ["1", "2", "3", "DEL", "=", "0", ".", "C",],
                                ].map((row, rowIndex) => (
                                    <div key={rowIndex} className="buttonRow">
                                        {row.map((btn) => (
                                            <div
                                                key={btn}
                                                className={`buttonItem ${btn === "C" ? "clear" : btn === "=" ? "igual" : btn === "DEL" ? "delete" :
                                                ["+", "-", "*", "/"].includes(btn) ? "operation" : "number"}`}
                                                onClick={() => {
                                                    if (btn === "C") handleClear();
                                                    else if (btn === "=") handleEqual();
                                                    else if (btn === "DEL") handleDelete();
                                                    else handleClick(btn);
                                                }}
                                            >
                                                {btn}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
