import React from 'react';
import './ProductsTestimonials.css';

const ProductsTestimonials: React.FC = () => {
    return (
        <section className="products-testimonials">
            {/* Explore Our Products Section */}
            <div className="products-section">
                <h2 className="section-title">Explore Our Products</h2>
                <div className="products-grid">
                    <div className="product-card">
                        <div className="product-image">
                            <img 
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="KINSCO Water Purifier with Copper Technology"
                                className="product-img"
                            />
                        </div>
                        <div className="product-info">
                            <div className="product-brand">KINSCO</div>
                            <div className="product-feature">COPPER TECHNOLOGY WITH SUPERIOR UV</div>
                            <div className="product-model">AQUA PUNCH</div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img 
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Pureit Revito Prime Water Purifier"
                                className="product-img"
                            />
                        </div>
                        <div className="product-info">
                            <div className="product-brand">pureit</div>
                            <div className="product-model">Revito Prime</div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img 
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="KINSCO Water Purifier with Copper Technology"
                                className="product-img"
                            />
                        </div>
                        <div className="product-info">
                            <div className="product-brand">KINSCO</div>
                            <div className="product-feature">COPPER TECHNOLOGY WITH SUPERIOR UV</div>
                            <div className="product-model">AQUA PUNCH</div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img 
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Pureit Revito Prime Water Purifier"
                                className="product-img"
                            />
                        </div>
                        <div className="product-info">
                            <div className="product-brand">pureit</div>
                            <div className="product-model">Revito Prime</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2 className="section-title">Testimonials</h2>
                <p className="section-subtitle">What Our Clients Say About Us</p>
                
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="quote-icon">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.72 0.319998L5.08 9.92L4.2 6.32C5.34667 6.32 6.28 6.65333 7 7.32C7.72 7.98666 8.08 8.90666 8.08 10.08C8.08 11.2267 7.70667 12.16 6.96 12.88C6.24 13.5733 5.33333 13.92 4.24 13.92C3.12 13.92 2.18667 13.5733 1.44 12.88C0.72 12.16 0.36 11.2267 0.36 10.08C0.36 9.73333 0.386667 9.4 0.44 9.08C0.493333 8.73333 0.6 8.33333 0.76 7.88C0.92 7.42666 1.14667 6.82666 1.44 6.08L3.76 0.319998H7.72ZM17.16 0.319998L14.52 9.92L13.64 6.32C14.7867 6.32 15.72 6.65333 16.44 7.32C17.16 7.98666 17.52 8.90666 17.52 10.08C17.52 11.2267 17.1467 12.16 16.4 12.88C15.68 13.5733 14.7733 13.92 13.68 13.92C12.56 13.92 11.6267 13.5733 10.88 12.88C10.16 12.16 9.8 11.2267 9.8 10.08C9.8 9.73333 9.82667 9.4 9.88 9.08C9.93333 8.73333 10.04 8.33333 10.2 7.88C10.36 7.42666 10.5867 6.82666 10.88 6.08L13.2 0.319998H17.16Z" fill="white"/>
                            </svg>
                        </div>
                        <p className="testimonial-text">
                            TechnoField was rated most popular online course or certification program for learning how to code according to StackOverflow's 2024 Developer survey.
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Alvin Lim"
                                    className="avatar-img"
                                />
                            </div>
                            <div className="author-info">
                                <div className="author-name">Alvin Lim</div>
                                <div className="author-location">Bangalore</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.72 0.319998L5.08 9.92L4.2 6.32C5.34667 6.32 6.28 6.65333 7 7.32C7.72 7.98666 8.08 8.90666 8.08 10.08C8.08 11.2267 7.70667 12.16 6.96 12.88C6.24 13.5733 5.33333 13.92 4.24 13.92C3.12 13.92 2.18667 13.5733 1.44 12.88C0.72 12.16 0.36 11.2267 0.36 10.08C0.36 9.73333 0.386667 9.4 0.44 9.08C0.493333 8.73333 0.6 8.33333 0.76 7.88C0.92 7.42666 1.14667 6.82666 1.44 6.08L3.76 0.319998H7.72ZM17.16 0.319998L14.52 9.92L13.64 6.32C14.7867 6.32 15.72 6.65333 16.44 7.32C17.16 7.98666 17.52 8.90666 17.52 10.08C17.52 11.2267 17.1467 12.16 16.4 12.88C15.68 13.5733 14.7733 13.92 13.68 13.92C12.56 13.92 11.6267 13.5733 10.88 12.88C10.16 12.16 9.8 11.2267 9.8 10.08C9.8 9.73333 9.82667 9.4 9.88 9.08C9.93333 8.73333 10.04 8.33333 10.2 7.88C10.36 7.42666 10.5867 6.82666 10.88 6.08L13.2 0.319998H17.16Z" fill="white"/>
                            </svg>
                        </div>
                        <p className="testimonial-text">
                            Rachel transitioned into a special education teacher role, where she found a greater sense of fulfillment and job security.
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img 
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Nisha Dash"
                                    className="avatar-img"
                                />
                            </div>
                            <div className="author-info">
                                <div className="author-name">Nisha Dash</div>
                                <div className="author-location">Pune</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.72 0.319998L5.08 9.92L4.2 6.32C5.34667 6.32 6.28 6.65333 7 7.32C7.72 7.98666 8.08 8.90666 8.08 10.08C8.08 11.2267 7.70667 12.16 6.96 12.88C6.24 13.5733 5.33333 13.92 4.24 13.92C3.12 13.92 2.18667 13.5733 1.44 12.88C0.72 12.16 0.36 11.2267 0.36 10.08C0.36 9.73333 0.386667 9.4 0.44 9.08C0.493333 8.73333 0.6 8.33333 0.76 7.88C0.92 7.42666 1.14667 6.82666 1.44 6.08L3.76 0.319998H7.72ZM17.16 0.319998L14.52 9.92L13.64 6.32C14.7867 6.32 15.72 6.65333 16.44 7.32C17.16 7.98666 17.52 8.90666 17.52 10.08C17.52 11.2267 17.1467 12.16 16.4 12.88C15.68 13.5733 14.7733 13.92 13.68 13.92C12.56 13.92 11.6267 13.5733 10.88 12.88C10.16 12.16 9.8 11.2267 9.8 10.08C9.8 9.73333 9.82667 9.4 9.88 9.08C9.93333 8.73333 10.04 8.33333 10.2 7.88C10.36 7.42666 10.5867 6.82666 10.88 6.08L13.2 0.319998H17.16Z" fill="white"/>
                            </svg>
                        </div>
                        <p className="testimonial-text">
                            With his new certification, Tom was able to attract more clients and expand his business significantly, leading to increased revenue and the ability to hire.
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Aksh Jithre"
                                    className="avatar-img"
                                />
                            </div>
                            <div className="author-info">
                                <div className="author-name">Aksh Jithre</div>
                                <div className="author-location">Mangalore</div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="quote-icon">
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.72 0.319998L5.08 9.92L4.2 6.32C5.34667 6.32 6.28 6.65333 7 7.32C7.72 7.98666 8.08 8.90666 8.08 10.08C8.08 11.2267 7.70667 12.16 6.96 12.88C6.24 13.5733 5.33333 13.92 4.24 13.92C3.12 13.92 2.18667 13.5733 1.44 12.88C0.72 12.16 0.36 11.2267 0.36 10.08C0.36 9.73333 0.386667 9.4 0.44 9.08C0.493333 8.73333 0.6 8.33333 0.76 7.88C0.92 7.42666 1.14667 6.82666 1.44 6.08L3.76 0.319998H7.72ZM17.16 0.319998L14.52 9.92L13.64 6.32C14.7867 6.32 15.72 6.65333 16.44 7.32C17.16 7.98666 17.52 8.90666 17.52 10.08C17.52 11.2267 17.1467 12.16 16.4 12.88C15.68 13.5733 14.7733 13.92 13.68 13.92C12.56 13.92 11.6267 13.5733 10.88 12.88C10.16 12.16 9.8 11.2267 9.8 10.08C9.8 9.73333 9.82667 9.4 9.88 9.08C9.93333 8.73333 10.04 8.33333 10.2 7.88C10.36 7.42666 10.5867 6.82666 10.88 6.08L13.2 0.319998H17.16Z" fill="white"/>
                            </svg>
                        </div>
                        <p className="testimonial-text">
                            With her new skills, Kradey secured a data analyst position at a tech startup, where she uses her skills to drive data-driven decision-making.
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <img 
                                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Kradey Sin"
                                    className="avatar-img"
                                />
                            </div>
                            <div className="author-info">
                                <div className="author-name">Kradey Sin</div>
                                <div className="author-location">Bangalore</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsTestimonials;
