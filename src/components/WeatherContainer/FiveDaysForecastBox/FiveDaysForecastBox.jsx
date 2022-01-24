import React from 'react';
import {FiveDaysForecastBoxStyled} from "./FiveDaysForecastBoxStyled";
import {SingleDayBoxStyled} from "./SingleDayBoxStyled";
import SingleDayBox from "./SingleDayBox";

const FiveDaysForecastBox = () => {
    return (
        <FiveDaysForecastBoxStyled>
            <SingleDayBoxStyled>
                <SingleDayBox>
                    ALBLASFLAf
                </SingleDayBox>
            </SingleDayBoxStyled>
            <SingleDayBoxStyled>
                <SingleDayBox>
                    ALBLASFLAf
                </SingleDayBox>
            </SingleDayBoxStyled>
            <SingleDayBoxStyled>
                <SingleDayBox>
                    ALBLASFLAf
                </SingleDayBox>
            </SingleDayBoxStyled>
            <SingleDayBoxStyled>
                <SingleDayBox>
                    ALBLASFLAf
                </SingleDayBox>
            </SingleDayBoxStyled>
            <SingleDayBoxStyled>
                <SingleDayBox>
                    ALBLASFLAf
                </SingleDayBox>
            </SingleDayBoxStyled>
        </FiveDaysForecastBoxStyled>
    );
};

export default FiveDaysForecastBox;