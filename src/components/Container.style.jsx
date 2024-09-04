import styled from 'styled-components'



export const Container = styled.div`
    width: 26rem;
    height: 8rem;
    background-color: var(--color-300);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 7px;
    gap: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (max-width: 620px) {
        width: 20rem;
    }
`

export const Title = styled.h1`
    color: var(--color-white);
    animation: myAnim 2s ease 0s 1 normal forwards;

    @keyframes myAnim {
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-30px);
	}

	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0);
	}

	55% {
		animation-timing-function: ease-in;
		transform: translateY(-10px);
	}

	72% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	81% {
		animation-timing-function: ease-in;
		transform: translateY(-6px);
	}

	88% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}

	95% {
		animation-timing-function: ease-in;
		transform: translateY(-2px);
	}

	100% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
}

    @media (max-width: 620px) {
        font-size: 1.8rem;
}
`

export const InputSearch = styled.input`
    width: 19rem;
    height: 2.5rem;
    border-radius: 5px;
    border-style: none;
    background: var(--color-200);
    text-align: center;
    color: var(--color-white);
    font-weight: bold;
    font-size: 1rem;
    background-color: var(--color-400);
    
    &::placeholder {
        color: var(--color-700);
        text-shadow: -1px 1px 1px rgba(0,0,0,0.05);
    }

    &:focus, input:focus {
        border: 2px solid var(--color-500);
        outline: 0;
    }

    @media (max-width: 620px) {
        width: 13rem;
    }
`

export const ButtonSubmit = styled.button`
    width: 5rem;
    height: 2.5rem;
    margin-left: 1rem;
    border-radius: 5px;
    border-style: none;
    background-color: var(--color-400);
    font-weight: bold;
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    

    &:hover {
        background-color: var(--color-500);
        cursor: pointer;
        color: var(--color-100);
        box-shadow: 1px 0px 3px 1px rgba(0,0,0,0.05);
        transform: scale(1.04, 1.04);
    }
`

export const BoxSearchAndSubmite = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

export const ContainerForm = styled.div`
    width: 26rem;
    background-color: var(--color-400);
    border-radius: 6px;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h1 {
        padding: 0.5rem;
        color: var(--color-white);
    }

    span {
        padding: 0.5rem;
        color: var(--color-white);
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }

    @media (max-width: 620px) {
        width: 20rem;
    }
`