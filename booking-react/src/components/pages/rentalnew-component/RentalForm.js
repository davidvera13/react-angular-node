import React from 'react';
import { useForm } from "react-hook-form";

const RentalForm = ({onSubmit}) => {
    const { register, handleSubmit} = useForm();
    const rentalOptions = ['Condo', 'Appartment', 'House']

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    {...register("title")}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"/>
            </div>

            <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                    {...register("city")}
                    name="city"
                    type="text"
                    className="form-control"
                    id="city"/>
            </div>

            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input
                    {...register("street")}
                    name="street"
                    type="text"
                    className="form-control"
                    id="street"/>
            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                    {...register("category")}
                    name="category"
                    className="form-control"
                    id="category"
                >
                    {
                        rentalOptions.map(option =>
                            <option key={option}> {option} </option>
                        )
                    }

                </select>
            </div>

            <div className="form-group">
                <label htmlFor="bedrooms">Image Url</label>
                <input
                    {...register("image")}
                    name="image"
                    type="text"
                    className="form-control"
                    id="image"/>
            </div>

            <div className="form-group">
                <label htmlFor="bedrooms">Rooms</label>
                <input
                    {...register("numOfRooms")}
                    name="numOfRooms"
                    type="number"
                    className="form-control"
                    id="numOfRooms"/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    {...register("description")}
                    name="description"
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description">
        </textarea>
            </div>

            <div className="form-group">
                <label htmlFor="dailyRate">Daily Price</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input
                        {...register("dailyPrice")}
                        name="dailyPrice"
                        type="number"
                        className="form-control"
                        id="dailyPrice"/>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="shared">Shared</label>
                <input
                    {...register("shared")}
                    name="shared"
                    type="checkbox"
                    className="form-control"
                    id="shared"/>
            </div>
            <button
                type="submit"
                className="btn btn-booking-main">Create
            </button>
        </form>
    )
}

export default RentalForm;
