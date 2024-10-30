import styled from "styled-components";
import { FormContainer, Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";
import useSWR from "swr";
import { useRouter } from "next/router.js";

export default function Comments({ locationName, comments, onSubmit }) {
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid black;
    border-radius: 0.8rem;
    padding: 0.5rem;
    text-align: center;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
    }
  `;

  const router = useRouter();
  const { mutate } = useSWR("/api/places");

  async function handleSubmitComment(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Article>
      <FormContainer onSubmit={onSubmit}>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment here..." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {comments && (
        <>
          <h1> {comments.length} fans commented on this place:</h1>
          {comments.map(({ name, comment }, idx) => {
            return (
              <>
                <p key={idx}>
                  <small>
                    <strong>{name}</strong> commented on {locationName}
                  </small>
                </p>
                <span>{comment}</span>
              </>
            );
          })}
        </>
      )}
    </Article>
  );
}
