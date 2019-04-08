import PropTypes from "prop-types";

export const registry = PropTypes.shape({
  ArrayFieldTemplate: PropTypes.func,
  FieldTemplate: PropTypes.func,
  ObjectFieldTemplate: PropTypes.func,
  definitions: PropTypes.object.isRequired,
  fields: PropTypes.objectOf(PropTypes.func).isRequired,
  formContext: PropTypes.object.isRequired,
  widgets: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  ).isRequired,
});

export const fieldProps = {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  errorSchema: PropTypes.object,
  formData: PropTypes.any,
  idSchema: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  rawErrors: PropTypes.arrayOf(PropTypes.string),
  readonly: PropTypes.bool,
  registry: registry.isRequired,
  required: PropTypes.bool,
  schema: PropTypes.object.isRequired,
  uiSchema: PropTypes.shape({
    "ui:options": PropTypes.shape({
      addable: PropTypes.bool,
      orderable: PropTypes.bool,
      removable: PropTypes.bool,
    }),
  }),
};
