import React from "react"
import Select, { components } from "react-select"
import "./styles.css"

const MenuList = (props) => {
  const { options, setValue } = props

  return (
    <components.MenuList {...props}>
      <div className="select-all-wrapper">
        <button
          type="button"
          className="select-all-btn"
          onClick={() => setValue(options, "select-option")}
        >
          Select All
        </button>
        <button
          type="button"
          className="select-all-btn"
          onClick={() => setValue([], "deselect-option")}
        >
          Deselect All
        </button>
      </div>
      {props.children}
    </components.MenuList>
  )
}

const ValueContainer = (props) => {
  const selected = props.getValue()
  let displayText = props.selectProps.placeholderText

  if (selected.length > 0) {
    displayText = selected.map((item) => item.label).join(", ")
  }

  return (
    <components.ValueContainer {...props}>
      <div className="select-value-text">{displayText}</div>

      {React.Children.map(props.children, (child) => {
        if (child && child.type && child.type.name === "Input") {
          return React.cloneElement(child, {
            placeholder: "",
            value: ""
          })
        }
        return child
      })}
    </components.ValueContainer>
  )
}


const ClearIndicator = (props) => {
  const {
    innerProps: { onMouseDown, ...rest }
  } = props

  return (
    <components.ClearIndicator
      {...props}
      innerProps={{
        ...rest,
        onMouseDown: (e) => {
          e.stopPropagation()
          if (onMouseDown) onMouseDown(e)
        }
      }}
    />
  )
}

const SelectAllMultiSelect = (props) => (
  <Select
    {...props}
    placeholder=""
    isMulti
    isClearable
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
    controlShouldRenderValue={false}
    components={{
      MenuList,
      ValueContainer,
      ClearIndicator
    }}
  />
)

export default SelectAllMultiSelect
