import Select from 'react-select'

const SelectDropdown = () => {
  const options = [
    { value: 'jack', label: 'Jack', color: '#FF8B00' },
    { value: 'john', label: 'John', color: '#36B37E' },
    { value: 'mike', label: 'Mike', color: '#0052CC' },
  ]
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color }
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: '#fff',
      }
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: '#fff',
      }
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: '#fff',
        cursor: 'pointer',
        ':hover': {
          color: '#fff',
        },
      }
    },
  }
  const handleChange = (selectedOption) => {
    console.log('handleChange', selectedOption)
  }
  // const handleInputChange = (inputValue, actionMeta) => {
  //   console.log('handleInputChange', inputValue, actionMeta)
  // }
  return (
    <Select
      options={options}
      onChange={handleChange}
      isMulti
      styles={colorStyles}
    />
  )
}

export default SelectDropdown
