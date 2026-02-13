import dotenv from "dotenv";
import axios from "axios";
const apiUrl = import.meta.env.API_URL;

export const submitContact = async ({
  name,
  email,
  phone,
  location,
  message,
}) => {
  try {
    const response = await axios.post("http://localhost:5000/api/contacts/", {
      name,
      email,
      phone,
      location,
      message,
    });

    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? `Error: ${error.response.data.message || error.response.statusText}`
      : `Error: ${error.message}`;
    console.error(errorMessage);

    throw new Error(errorMessage);
  }
};
export const getContacts = async () => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.get("http://localhost:5000/api/contacts/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:5000/api/admin/login", { email, password });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const addGallery = async (formdata) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.post("http://localhost:5000/api/gallery/", formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const updateGallery = async (id, data) => {
  try {
    const token = localStorage.getItem("adminToken");
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    if (data.category && data.category._id) {
      formData.append("categoryId", data.category._id);
    }

    if (data.image) {
      formData.append("image", data.image);
    }

    const response = await axios.put(
      `http://localhost:5000/api/gallery/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Something went wrong. Try again.");
  }
};


export const deleteCategory = async (id) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.delete(`http://localhost:5000/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const getGalleries = async () => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.get("http://localhost:5000/api/gallery/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};


export const addCategory = async (name, description) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.post("http://localhost:5000/api/categories/", { name, description }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const updateCategory = async (id, data) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.put(`http://localhost:5000/api/categories/${id}`, { name: data.name, description: data.description }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const updateTestimonial = async (id, data) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.put(`http://localhost:5000/api/testimonials/${id}`, { name: data.name, message: data.message, rating: data.rating }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};


export const addTestimonial = async (form) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.post("http://localhost:5000/api/testimonials/", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/testimonials/");
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const getTotals = async () => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.get("http://localhost:5000/api/admin/getTotal/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};

export const getCategories = async () => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await axios.get("http://localhost:5000/api/categories/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {

    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Something went wrong. Try again.");
  }
};
