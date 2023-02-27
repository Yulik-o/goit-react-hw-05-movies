import { StyledButton, StyledForm } from "./MoviesPageStyled"

export const MoviesPage = () =>{
    return (
        <StyledForm>
      <input
        type="text"
        name="searchQuery"
        placeholder="Movie search"
        autoComplete="off"
      />
      <StyledButton type="submit">
      </StyledButton>
    </StyledForm>
    )
}