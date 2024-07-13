const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class CreateUsersRolesUserRoles1719385707888 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE users (
              id INT AUTO_INCREMENT NOT NULL,
              email VARCHAR(255) NOT NULL,
              password VARCHAR(255) NOT NULL,
              name VARCHAR(255),
              phone_number VARCHAR(255),
              PRIMARY KEY (id),
              UNIQUE INDEX email_unique (email)
            )
          `);
      
          await queryRunner.query(`
            CREATE TABLE roles (
              id INT AUTO_INCREMENT NOT NULL,
              name VARCHAR(255) NOT NULL,
              PRIMARY KEY (id),
              UNIQUE INDEX name_unique (name)
            )
          `);
      
          await queryRunner.query(`
            CREATE TABLE user_roles (
              id INT AUTO_INCREMENT NOT NULL,
              user_id INT NOT NULL,
              role_id INT NOT NULL,
              PRIMARY KEY (id),
              FOREIGN KEY (user_id) REFERENCES users(id),
              FOREIGN KEY (role_id) REFERENCES roles(id)
            )
          `);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE user_roles`);
        await queryRunner.query(`DROP TABLE roles`);
        await queryRunner.query(`DROP TABLE users`);
    }

}
