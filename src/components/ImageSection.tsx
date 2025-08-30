import React from 'react';

const ImageSection: React.FC = () => {
    return (
        <section className="image-section">
            <div className="image-container">
                <div className="image-wrapper left-image">
                    <img 
                        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                        alt="Clear glass with ice cubes and water splash"
                        className="water-image"
                    />
                </div>
                <div className="image-wrapper middle-image">
                    <img 
                        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                        alt="Hands cupped with water splash"
                        className="water-image"
                    />
                </div>
                <div className="image-wrapper right-image">
                    <img 
                        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                        alt="Water pouring into cupped hands"
                        className="water-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default ImageSection;
