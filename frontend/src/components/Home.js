import React, { Fragment, useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'
import MetaData from './layout/MetaData'
import Product from './product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import Loader from './layout/Loader'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const alert = useAlert()
  const dispatch = useDispatch()
  const params = useParams()

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    //filteredProductsCount,
  } = useSelector((state) => state.products)

  const keyword = params.keyword

  useEffect(() => {
    if (error) {
      return alert.error(error)
    }

    dispatch(getProducts(keyword, currentPage))
  }, [dispatch, alert, error, keyword, currentPage])

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={'Buy best products online'} />
          <h1 id="products_heading">Latest Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>

          {resPerPage <= productsCount && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText={'Next'}
                prevPageText={'Prev'}
                firstPageText={'First'}
                lastPageText={'Last'}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
