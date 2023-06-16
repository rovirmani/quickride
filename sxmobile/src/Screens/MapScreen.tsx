import React from 'react';
import { StyledMapView} from './MapScreen.styles';
import { useMapScreen } from './useMapScreen';

export const MapScreen = () => {
    const {models, operations} = useMapScreen();

    return (
        <StyledMapView 
        ref = {models.mapRef}
        showsUserLocation 
        onUserLocationChange={operations.handleUserLocationChange} 
        showsMyLocationButton={true}
        showsCompass={true}
        />

    );
    }