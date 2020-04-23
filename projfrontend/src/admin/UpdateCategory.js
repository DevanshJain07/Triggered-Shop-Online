import React, { useState , useEffect} from 'react';
import Base from "../core/Base";
import {isAuthenticated} from "../auth/helper";
import {Link} from "react-router-dom";
import {updateCategory,getCategory} from "./helper/adminapicall"

const UpdateCategory = ({ match }) => {

    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
        name: "",
        loading: false,
        error: "",
        createdCategory: "",
        getaRedirect: false,
        formData: "",
        success:""
      });
    
      const {
        name,  
        loading,
        error,
        createdCategory,
        getaRedirect,
        formData,
        success
      } = values;
    
      const preload = categoryId => {
        getCategory(categoryId).then(data => {
          //console.log(data);
          if (data?.error) {
            setValues({ ...values, error: data.error });
          } else {
            setValues({
              ...values,
              name: data.name,
              formData: new FormData()
            });
          }
        });
      };

      useEffect(() => {
        preload(match.params.categoryId);
      }, []);

      const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true,success:false });
    
        updateCategory(match.params.categoryId, user._id, token, formData).then(
          data => {
            if (data?.error) {
              setValues({ ...values, error: data.error });
            } else {
              setValues({
                ...values,
                name: "",
                error:false,
                success:true,
                loading: false,
                createdCategory: data.name
              });
            }
          }
        );
      };
    
      const handleChange = name => event => {
        setValues({...values, error:false, [name]: event.target.value});

        //setValues({ ...values });
      };
    
      const successMessage = () => {
        if(success){
            return <h4 className="text-success">Category Updated successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error){
            return <h4 className="text-danger">Failed to Update category</h4>
        }
    }

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
        </div>
    );

  

    const myCategoryFrom = () => (
        <form>
            <div className="form-group">
                <p className="lead">Enter the category</p>
                <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
                <button onClick={onSubmit} className="btn btn-outline-info">update Category</button>
            </div>
        </form>
    );

    return (
        <Base  title="Create a category here" description="Add a new category for new tshirts" className="container bg-info p-4">
          <div className="row bg-white rounded">
              <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myCategoryFrom()}
                    {goBack()}
              </div>
          </div>  
        </Base>
    );
};

export default UpdateCategory;

