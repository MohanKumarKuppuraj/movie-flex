import styled from 'styled-components';

export const PrimaryBGContainer = styled.div`
	background-color: ${(props)=>props.theme.primaryBackground};
	color: ${(props)=>props.theme.color};

	& .thin-theme-border{
		border: 1px solid ${(props)=>props.theme.color};
	}

	& .block-theme-border{
		border: 2px solid ${(props)=>props.theme.color};
	}

	& .transparent-wrapper{
		background: ${(props)=>props.theme.primaryBackground+'77'};
	}

	& .primary-background{
		background: ${(props)=>props.theme.primaryBackground};
	}

	& .block-theme-hover-border:hover{
		border: 2px solid ${(props)=>props.theme.color};
	}

	& .primary-text-color{
		color: ${(props)=>props.theme.color};
	}
`;

export const PrimaryLightBGContainer = styled.div`
	background-color: ${(props)=>props.theme.primaryLightBackground};
	color: ${(props)=>props.theme.color};

	& .thin-theme-border{
		border: 1px solid ${(props)=>props.theme.color};
	}

	& .block-theme-border{
		border: 2px solid ${(props)=>props.theme.color};
	}

	& .transparent-wrapper{
		background: ${(props)=>props.theme.primaryBackground+'77'};
	}

	& .primary-background{
		background: ${(props)=>props.theme.primaryBackground};
	}

	& .block-theme-hover-border:hover{
		border: 2px solid ${(props)=>props.theme.color};
	}

	& .primary-text-color{
		color: ${(props)=>props.theme.color};
	}
`;
