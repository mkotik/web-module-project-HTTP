import React from "react";

const DeleteMovieModal = (props) => {
  return (
    <div
      id="deleteMovieModal"
      style={{
        position: "absolute",
        top: "0px",
        right: "0px",
        left: "0px",
        bottom: "0px",
        width: "40rem",
        margin: "auto",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete Movie</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                onClick={() => props.setModalDisplayed(false)}
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input
                type="submit"
                className="btn btn-danger"
                value="Delete"
                onClick={props.handleDelete}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovieModal;
