import { render,screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Input from "@components/input/Input";

describe("Input component",() => {
    it ("match snapshot", () =>{
        const {container} = render (
        < Input type="text"
                id="username"
                name="username"
                label="Username"
                labelClass="username-label"
                value="example"
                onChange={vi.fn()}/>)
        expect(container).toMatchSnapshot();
    });

    it("should render an input with provided id and class",()=>{
        render(
            <Input
                type="text"
                id="username"
                name="username"
                label="Username"
                labelClass="username-label"
                value="example"
                onChange={vi.fn()}
            />
        );
        const input=screen.getByDisplayValue("example");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("id","username");
        expect(input).toHaveAttribute("class","input-box");
    });
});