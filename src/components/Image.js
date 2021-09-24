import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`;
const StyledImage = styled.Image`
    background-color: ${({theme}) => theme.imageBackground};
    width: 100px;
    height: 100px;
`;

const Image = ({ url, imageStyle }) => {
    return (
        <Container>
            <StyledImage source={{ uri: url }} style={imageStyle} />
        </Container>
    );
};

Image.propTypes = { // propTypes로 컴포넌트의 prop에 타입 확인
    uri: PropTypes.string,
    imageStyle: PropTypes.object,
};

export default Image;