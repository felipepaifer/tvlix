import React from 'react';
import { InlineLoadingContainer, Point } from './styled';

export default class TvInlineLoading extends React.Component{
    render(){

        const points = [1,2,3];

        return(
            <InlineLoadingContainer>
                {points.map(() => {
                    return <Point color={this.props.color} />
                })}
            </InlineLoadingContainer>
        )
    }
}
