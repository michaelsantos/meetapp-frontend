import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('File');

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });

      setPreview(defaultValue && defaultValue.url);
      setFile(defaultValue && defaultValue.id);
    }
  }, [ref, defaultValue]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <Content>
            <MdPhotoCamera size={54} />
            Selecionar imagem
          </Content>
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
