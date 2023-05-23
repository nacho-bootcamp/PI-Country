const validation = (formData) => {
  let errors = {};

  if (!/^[A-Z]/.test(formData.name)) {
    errors.name = "La actividad debe comenzar con mayúscula";
  }
  if (formData.name.length === 0) {
    errors.name = "Este campo no puede estar vacío";
  }
  if (formData.name.length > 25) {
    errors.name = "La actividad no puede superar los 15 caracteres ";
  }
  if (formData.name.length < 5) {
    errors.name = "no puede contener menos de 5 caracteres";
  }

  if (formData.difficulty < 1 || formData.difficulty > 5) {
    errors.difficulty = "La dificultad debe ser mayor a 1 y menor de 5";
  }
  if (formData.duration < 1 || formData.duration > 15) {
    errors.duration = "La duración debe ser mayor a 1 hora y menor de 15 horas";
  }
  if (!formData.season) {
    errors.season = "Este campo no puede estar vacío";
  }
  if (!formData.countries.length) {
    errors.countries = "Debe seleccionar al menos dos países";
  }
  if (formData.countries.length > 4) {
    errors.countries = "Solo puede elegir un máximo de 5 países";
  }

  return errors;
};

export default validation;
