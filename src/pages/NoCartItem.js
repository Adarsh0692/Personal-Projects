import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NoCartItem() {
    const navigate = useNavigate()
  return (
    <div>
      <section className="min-vh-100" style={{ backgroundColor: "#d2c9ff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5 vh-100 w-50  ">
                        <h1>No Items-</h1>
                        
                      <div className="mt-5">
                        <Button onClick={() => navigate('/')}>Add Items</Button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
