import React, { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecFormInputs {
  businessName: string;
  description: string;
  features: Array<string>;
  pricingModel: string; // Options could be "subscription", "per_use", etc.
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecFormInputs>();

  const onSubmit: SubmitHandler<BusinessSpecFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      alert('Business specification created successfully!');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Failed to create business specification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">Business Name</label>
        <input
          id="businessName"
          type="text"
          placeholder="Enter business name"
          {...register('businessName', { required: 'Business name is required' })}
          className={clsx(
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            errors.businessName && "border-red-500"
          )}
        />
        {errors.businessName && <p className="text-red-500 text-xs italic">{errors.businessName.message}</p>}
      </div>
      
      {/* Add more form fields as needed */}
      
      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;

import React, { useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BusinessSpecFormInputs {
  businessName: string;
  description: string;
  features: Array<string>;
  pricingModel: string; // Options could be "subscription", "per_use", etc.
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecFormInputs>();

  const onSubmit: SubmitHandler<BusinessSpecFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/business-specification', data);
      alert('Business specification created successfully!');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Failed to create business specification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">Business Name</label>
        <input
          id="businessName"
          type="text"
          placeholder="Enter business name"
          {...register('businessName', { required: 'Business name is required' })}
          className={clsx(
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            errors.businessName && "border-red-500"
          )}
        />
        {errors.businessName && <p className="text-red-500 text-xs italic">{errors.businessName.message}</p>}
      </div>
      
      {/* Add more form fields as needed */}
      
      <button
        type="submit"
        disabled={loading}
        className={clsx(
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          loading && "opacity-50 cursor-not-allowed"
        )}
      >
        {loading ? 'Creating...' : 'Create Business Specification'}
      </button>
    </form>
  );
};

export default CreateBusinessSpecification;