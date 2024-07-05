import { Component } from "react";

class ProductClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails : {
                productId : '',
                productName : '',
                productCost : '',
                productOnline : '',
                productCategory : '',
                availableInStore : []
            },
            productList : []
        };
    }

    handleChange = (e) => {
        const {name,value,type,checked} = e.target;
        if(type === 'checkbox') {
            if(checked) {
                this.setState(prevState =>({
                    productDetails : {
                        ...prevState.productDetails,
                        availableInStore : [...prevState.productDetails.availableInStore, value]
                    }
                }));
            } else {
                this.setState(prevState => ({
                    productDetails : {
                        ...prevState.productDetails,
                        availableInStore : prevState.productDetails.availableInStore.filter(store =>store !== value)
                    }
                }));
            }
        } else {
            this.setState({
                productDetails : {
                    ...this.state.productDetails,
                    [name] : value
                }
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            productList : [...prevState.productList, prevState.productDetails],
            productDetails : {
                productId :'',
                productName : '',
                productCost : '',
                productOnline : '',
                productCategory : '',
                availableInStore : []
            }
        }));
    };

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
        <table align="center">
          <tr>
            <td>Product ID</td>
            <td>
              <input
                type="text"
                name="productId"
                value={this.state.productDetails.productId}
                onChange={this.handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>
              <input
                type="text"
                name="productName"
                value={this.state.productDetails.productName}
                onChange={this.handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Cost</td>
            <td>
              <input
                type="number"
                name="productCost"
                value={this.state.productDetails.productCost}
                onChange={this.handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Online</td>
            <td>
              <input
                type="radio"
                name="productOnline"
                value="Yes"
                checked={this.state.productDetails.productOnline === "Yes"}
                onChange={this.handleChange}
                required
              />
              <label for="yes">Yes</label> &nbsp; &nbsp;
              <input
                type="radio"
                name="productOnline"
                value="No"
                checked={this.state.productDetails.productOnline === "No"}
                onChange={this.handleChange}
                required
              />
              <label for="No">No</label>
            </td>
          </tr>
          <tr>
            <td>Product Category</td>
            <td>
              <select
                name="productCategory"
                value={this.state.productDetails.productCategory}
                onChange={this.handleChange}
                required
              >
                <option value=" ">---Select---</option>
                <option value="Grocery">Grocery</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Available in store</td>
            <td>
              &nbsp; &nbsp; &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="BigBazar"
                checked={this.state.productDetails.availableInStore.includes("BigBazar")}
                onChange={this.handleChange}
              />
              <label>Big Bazaar</label> &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="DMart"
                checked={this.state.productDetails.availableInStore.includes("DMart")}
                onChange={this.handleChange}
              />
              <label>DMart</label> &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="Relaince"
                checked={this.state.productDetails.availableInStore.includes("Relaince")}
                onChange={this.handleChange}
              />
              <label>Relaince</label> &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="Mega Store"
                checked={this.state.productDetails.availableInStore.includes("Mega Store")}
                onChange={this.handleChange}
              />
              <label>Mega store</label> &nbsp;
            </td>
          </tr>
          <button type="Submit">Add Product</button>
        </table>
      </form>
      <br></br>
      <table className="table table-bordered" style={{width:"60%"}} align="center">
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Cost</th>
                <th>Product Online</th>
                <th>Product Category</th>
                <th>Available In Store</th>
            </tr>
        </thead>
        <tbody>
            {this.state.productList.map((product,index)=>(
                <tr key={index}>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.productCost}</td>
                    <td>{product.productOnline}</td>
                    <td>{product.productCategory}</td>
                    <td>{product.availableInStore.join(',')}</td>
                </tr>
            ))}
        </tbody>
      </table>
        </div>
        );
    }
}

export default ProductClass;