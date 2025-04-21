import React from "react";
import CourseForm from "./courseForm";
import { render, screen } from "@testing-library/react";
import { it } from "@jest/globals";

function renderCourseForm(args) {
  const defaultProps = {
    course: {},
    authors: [],
    onSave: () => {},
    onChange: () => {},
    saving: false,
    errors: {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render add course Header", () => {
  renderCourseForm();
  screen.getByRole("heading", { name: "Add Course" });
});

it('should label button as "Save" when not saving', () => {
  renderCourseForm();
  screen.getByRole("button", { name: "Save" });
});

it('should label button as "Saving..." when saving', () => {
  renderCourseForm({ saving: true });
  screen.getByRole("button", { name: "Saving..." });
});
