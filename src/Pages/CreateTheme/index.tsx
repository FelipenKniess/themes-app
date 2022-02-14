import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { Container } from './styles';
import Button from '../../Components/Button';
import Input from '../../Components/input';
import getValidationErrors from '../../utils/getValidationErrors';

type ThemeData = {
    name: string,
    backgroundColor: string,
    primaryTextColor: string,
    secondaryTextColor: string,
    accentColor: string
}

const Home:React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = async ({
    name, backgroundColor, primaryTextColor, secondaryTextColor, accentColor,
  }: ThemeData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
        backgroundColor: Yup.string().required('backgroundColor is required'),
        primaryTextColor: Yup.string().required('primaryTextColor is required'),
        secondaryTextColor: Yup.string().required('secondaryTextColor is required'),
        accentColor: Yup.string().required('accentColor is required'),
      });

      await schema.validate({
        name,
        backgroundColor,
        primaryTextColor,
        secondaryTextColor,
        accentColor,
      }, {
        abortEarly: false,
      });

      const themes = localStorage.getItem('@themes-app/themes');

      if (themes) {
        const allThemes = JSON.parse(themes);
        allThemes.push({
          id: uuidv4(),
          name,
          backgroundColor,
          primaryTextColor,
          secondaryTextColor,
          accentColor,
        });

        localStorage.setItem('@themes-app/themes', JSON.stringify(allThemes));
      } else {
        const addItem = [{
          id: uuidv4(),
          name,
          backgroundColor,
          primaryTextColor,
          secondaryTextColor,
          accentColor,
        }];

        localStorage.setItem('@themes-app/themes', JSON.stringify(addItem));
      }

      toast.success('Theme created!');
      history.push('/');
    } catch (err:any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <Container>
        <Link to="/">
          <BsFillArrowLeftCircleFill size={35} />
        </Link>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input name="name" type="text" placeholder="Name" />
          <Input name="backgroundColor" type="text" placeholder="background-color" />
          <Input name="primaryTextColor" type="text" placeholder="primary-text-color" />
          <Input name="secondaryTextColor" type="text" placeholder="secondary-text-color" />
          <Input name="accentColor" type="text" placeholder="accent-color" />
          <Button type="submit">Insert theme</Button>
        </Form>

      </Container>
    </>
  );
};

export default Home;
