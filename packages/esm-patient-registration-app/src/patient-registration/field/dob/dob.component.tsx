import React, { useContext } from 'react';
import DatePicker from 'carbon-components-react/es/components/DatePicker';
import DatePickerInput from 'carbon-components-react/es/components/DatePickerInput';
import { useTranslation } from 'react-i18next';
import { useField } from 'formik';
import { PatientRegistrationContext } from '../../patient-registration-context';
import { generateFormatting } from '../../date-util';

export const DobField: React.FC = () => {
  const { t } = useTranslation();
  const [field, meta] = useField('birthdate');
  const { setFieldValue } = useContext(PatientRegistrationContext);
  const { format, placeHolder, dateFormat } = generateFormatting(['d', 'm', 'Y'], '/');
  const invalidText = meta.error && t(meta.error);

  const onDateChange = ([birthdate]) => {
    setFieldValue('birthdate', birthdate);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <DatePicker dateFormat={dateFormat} datePickerType="single" light onChange={onDateChange}>
        <DatePickerInput
          id="birthdate"
          placeholder={placeHolder}
          labelText={t('dateOfBirthLabelText', 'Date of Birth')}
          invalid={!!(meta.touched && meta.error)}
          invalidText={invalidText}
          {...field}
          value={format(field.value)}
        />
      </DatePicker>
    </div>
  );
};
