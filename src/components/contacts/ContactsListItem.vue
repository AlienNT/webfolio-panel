<script setup lang="ts">
import DisplayDate from '@/components/UI/displayFields/DisplayDate.vue'

interface ContactProps {
  contact: Contact
}

defineProps<ContactProps>()

</script>

<template>
  <li class="contact-list-item">
    <div class="field-content">
      <div class="contact-field title">
        <div class="field-title">title</div>
        <div class="field-value">{{ contact.title }}</div>
      </div>
      <div class="contact-field type">
        <div class="field-title">type</div>
        <div class="field-value">{{ contact.type }}</div>
      </div>
      <div class="contact-field value">
        <div class="field-title">value</div>
        <div class="field-value">{{ contact.value }}</div>
      </div>
      <div class="field-date">
        <div class="contact-field created-at">
          <div class="field-title">created</div>
          <div class="field-value">
            <DisplayDate
              :date="contact.createdAt"
              show-time
            />
          </div>
        </div>
        <div class="contact-field updated-at">
          <div class="field-title">updated</div>
          <div class="field-value">
            <DisplayDate
              :date="contact.updatedAt"
              show-time
            />
          </div>
        </div>
      </div>
    </div>
    <div class="field-buttons">

    </div>
  </li>
</template>

<style scoped lang="scss">
.contact-list-item {
  color: $ColorLight;
  display: flex;
  background: $ColorMiddleDark;
  border-radius: 10px;
  padding: 5px;
}

.field-title {
  background: transparentize($ColorPrimary, .5);
  border-radius: 5px;
  font-weight: bold;

  &:first-letter {
    text-transform: uppercase;
  }
}

.field-title, .field-value {
  padding: 5px 15px;
  font-size: 16px;
  font-family: monospace;
}

.field-value {
  display: flex;
  flex: 1;
}

.field-content {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

.field-buttons {
  width: 50px;
}

.contact-field {
  background: lighten($ColorMiddleDark, 5%);
  margin: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 1 1 20%;
  word-break: break-all;
  word-wrap: anywhere;
  font-size: 16px;
  min-width: 100px;

  &.title, &.type {
    flex: 1 1 5%;
  }

  &.value {
    flex: 1 1 25%;
  }
}

.field-date {
  flex: 1 1 20%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  .created-at, .updated-at {
    flex: 1;
  }
}
</style>