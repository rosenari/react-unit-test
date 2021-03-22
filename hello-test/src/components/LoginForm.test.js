import React from "react";
import { render, fireEvent } from "@testing-library/react"
import LoginForm from "./LoginForm"

test('LoginForm component test - email,password 입력안했을때', () => {
    const { getByText } = render(<LoginForm onSubmit={() => null} />);

    const button = getByText("로그인");

    expect(button).toBeDisabled();
});

test('LoginForm component test - email만 입력했을때', () => {
    const { getByText, getByLabelText } = render(<LoginForm onSubmit={() => null} />);

    const button = getByText("로그인");
    const email = getByLabelText("이메일");

    fireEvent.change(email, { target: { value: "rosenari88@gmail.com" } });

    expect(button).toBeDisabled();
});

test('LoginForm component test - password만 입력햇을떄', () => {
    const { getByText, getByLabelText } = render(<LoginForm onSubmit={() => null} />);

    const button = getByText("로그인");
    const password = getByLabelText("비밀번호");

    fireEvent.change(password, { target: { value: "1234" } });

    expect(button).toBeDisabled();
});

test('LoginForm component test - email,password 둘다 입력햇을떄', () => {
    const { getByText, getByLabelText } = render(<LoginForm onSubmit={() => null} />);

    const button = getByText("로그인");
    const email = getByLabelText("이메일");
    const password = getByLabelText("비밀번호");

    fireEvent.change(email, { target: { value: "rosenari88@gmail.com" } });
    fireEvent.change(password, { target: { value: "1234" } });

    expect(button).toBeEnabled();
});