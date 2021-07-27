export default {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable('Schools', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
				field: 'name',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				field: 'created_at',
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				field: 'updated_at',
			},
		}),
	down: (queryInterface) => queryInterface.dropTable('Schools'),
};
